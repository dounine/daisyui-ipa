const pow1024 = (size) => {
    return Math.pow(1024, size)
}

export default {
    randomsort: (a, b) => {
        return Math.random() > .5 ? -1 : 1;
    },
    getWindowUrlParams() {
        let url = window.location.search;
        let index = url.indexOf('?');
        let obj = {};
        if (index !== -1) {
            let str = url.substr(1);
            let arr = str.split('&');
            for (let i = 0; i < arr.length; i++) {
                obj[arr[i].split('=')[0]] = arr[i].split('=')[1];
            }
        }
        return obj;
    },
    timeFormat: (timeStr) => {
        if (/\d{13}/.test(timeStr)) {
            let date = new Date(parseInt(timeStr));
            let Y = date.getFullYear();
            let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
            let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
            let H = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
            let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
            let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
            return (Y + '-' + M + '-' + D + ' ' + H + ':' + m + ':' + s);
        }
        return timeStr.replace('T', ' ').replace('.000Z', '')
    },
    sizeFormat: (size) => {
        if (!size) return `${size} B`
        if (size < pow1024(1)) return size + ' B'
        if (size < pow1024(2)) return (size / pow1024(1)).toFixed(2) + ' KB'
        if (size < pow1024(3)) return (size / pow1024(2)).toFixed(2) + ' MB'
        if (size < pow1024(4)) return (size / pow1024(3)).toFixed(2) + ' GB'
        return (size / pow1024(4)).toFixed(2) + 'TB'
    },
    dumpStatusFormat: (status) => {
        if (status === 0) {
            return {
                text: '排队中',
                content: '提取请求已经提交，请耐心排队等待提取',
                color: 'black'
            }
        } else if (status === 1) {
            return {
                text: '提取中',
                content: '正在提取与上传，请等待',
                color: 'green'
            }
        } else if (status === 2) {
            return {
                text: '完成',
                content: '提取已经完成，点击即可下载',
                color: '#ccc'
            }
        } else if (status === 3) {
            return {
                text: '不可提取',
                content: '由于应用限制等原因，此应用无法提取，请提取其它应用',
                color: 'red'
            }
        } else if (status === 4) {
            return {
                text: '越狱屏蔽',
                content: '此程序有越狱环境检测，无法提取',
                color: 'red'
            }
        } else if (status === 5) {
            return {
                text: '暂停提取',
                content: '应用过大影响整站提取速度，优先提取小应用',
                color: 'red'
            }
        } else if (status === 6) {
            return {
                text: '版本过旧',
                content: '请重新提取最新版本，此版本为旧版本不可提取',
                color: 'red'
            }
        } else if (status === 7) {
            return {
                text: '付费应用',
                content: '此应用为付费软件，不支持提取',
                color: 'red'
            }
        }
        return {
            text: '错误',
            content: '请进群联系管理员',
            color: 'red'
        }
    },
    debounce: (fn, delay) => {
        let debounceTimeout
        return (...args) => {
            if (debounceTimeout) {
                clearTimeout(debounceTimeout)
            }
            debounceTimeout = setTimeout(() => {
                fn(...args)
            }, delay)
        }
    }
}