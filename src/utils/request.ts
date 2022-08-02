import merge from 'lodash'

export enum HTTP_METHOD {
    'GET' = 'GET',
    'POST' = 'POST',
    'PUT' = 'PUT',
    'DELETE' = 'DELETE'
}

export interface IRequestOptions extends RequestInit {
    // 请求方法
    method: HTTP_METHOD
    /** @Description: get请求query字段 */
    query: IAnyMap
    /** @Description: 超时时间 */
    timeout?: number

}

interface IAnyMap {
    [propName: string]: any;
}

interface IResponseData<T> {
    status: number
    data: T
    message: string
}


/**
 * Http request
 * @param url request URL
 * @param options request options
 */
interface IHttpInterface {
    request: <T>(url: string, options?: IRequestOptions) => Promise<IResponseData<T>>
}


class Http implements IHttpInterface{
    public async request<T>(url: string, options?: IRequestOptions, abortController?: AbortController): Promise<IResponseData<T>> {
        const opts: IRequestOptions = merge({}, {
            // 请求的默认配置
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Accept: 'application/json'
            },
            credentials: 'include',
            mode: 'cors',
            cache: 'no-cache',
            timeout: 40000
        }, options)

        abortController && (opts.signal = abortController.signal)

        try {
            const res = await Promise.race([
                fetch(url, options),
                new Promise<any>((resolve, reject) => {
                    setTimeout(() => {
                        resolve(JSON.stringify({
                            status: 10001,
                            data: null,
                            message: '请求超时，请稍后重试'
                        }))
                    }, opts.timeout)
                })
            ])
            return await res.json()
        } catch (e) {
            console.log(e)
            return await (e as any).json()
        }
    }
}

const { request } = new Http()

export default request
