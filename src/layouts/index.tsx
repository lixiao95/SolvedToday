import styles from './index.less'
import React from 'react'

const BasicLayout = (props: React.ComponentProps<any>) => {
    console.log(props)
    return (
        <div className={styles.test}>123</div>
    )
}

export default BasicLayout
