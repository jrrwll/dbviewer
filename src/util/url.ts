export function objectToQueryString(obj: any, prefix?: string): string {
    const pairs: string[] = []
    Object.keys(obj).forEach((key) => {
        if (!Object.prototype.hasOwnProperty.call(obj, key)) return
        const value = obj[key]
        if (value === undefined) return

        const encodedKey = encodeURIComponent(key)
        const encodedValue = encodeURIComponent(value)
        let pair
        if (typeof value === 'object') {
            pair = objectToQueryString(value, prefix ? `${prefix}[${encodedKey}]` : encodedKey)
        } else {
            pair = `${prefix ? `${prefix}[${encodedKey}]` : encodedKey}=${encodedValue}`
        }
        pairs.push(pair)
    })
    return pairs.join('&')
}

export function queryStringToObject(query: string): Record<string, string> {
    let queryString = query
    if (!queryString) {
        return {}
    }

    const queryObject: Record<string, string> = {}
    const i = queryString.indexOf('#')
    if (i !== -1) {
        queryString = queryString.slice(0, i)
    }
    queryString.split('&').forEach((value) => {
        const k = value.indexOf('=')
        if (k !== -1 && k !== value.length - 1) {
            queryObject[value.slice(0, k)] = value.slice(k + 1)
        }
    })
    return queryObject
}

// based on window.location.search
export function getSearchValue(key: string, defaultValue: string | number): string | number {
    let { search } = window.location
    if (search) {
        search = search.slice(1)
        const query = queryStringToObject(search)
        if (query && query[key]) {
            if (typeof defaultValue === 'number') {
                let value = Number(query[key])
                if (Number.isNaN(value)) value = defaultValue
                return value
            }
            return query[key]
        }
    }
    return defaultValue
}

export function getOrigin(): string {
    return `${window.location.protocol}//${window.location.host}`
}

export function getLanguage(): string {
    return navigator.language.split(/[-_]/)[0]
}

export function openLink(url: string, target: string | undefined = undefined) {
    const link = document.createElement('a')
    link.href = url
    link.style.visibility = 'hidden'
    if (target) link.target = target
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}

export function openBlankLink(url: string) {
    openLink(url, '_blank')
}
