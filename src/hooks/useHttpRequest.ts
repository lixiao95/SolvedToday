import request, { IRequestOptions } from '@/utils/request'
import { useEffect, useRef, useState } from 'react'

interface IHttpResData<T> {
    data: T | undefined
    loading: boolean
    error: string | null
}

export function useHttpRequest<T>(url: string, options: IRequestOptions): IHttpResData<T> {
    const [data, setData] = useState<T>()
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)


    const abortControllerRef = useRef<AbortController>()

    /**
     * 超时或者页面销毁/路由跳转，取消请求
     */


    function cancelRequest() {
        setData(undefined)
        setLoading(false)
        abortControllerRef.current?.abort()
    }

    useEffect(() => {
        setLoading(true)

        abortControllerRef.current = new AbortController()

        request<T>(url, options || {}, abortControllerRef.current)
            .then(res => {
                const { message, data, status } = res
                setData(res.data)
            }).catch(err => {
                setError(err)
            }).finally(() => {
                setLoading(false)
            })

        return () => cancelRequest()
    }, [url, JSON.stringify(options)])
    return {
        data,
        loading,
        error
    }
}
