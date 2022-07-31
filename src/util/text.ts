// translate (\y\M\d \h\m\s \S \ \\) to (yMd hms S  \)
export function fromBackslash(str: string, backslash = '\\'): string {
    const newStr = []
    const len = str.length
    for (let i = 0; i < len; i++) {
        if (str[i] === backslash) {
            if (i === len - 1) {
                newStr.push(str[i])
                break
            } else {
                i += 1
                newStr.push(str[i])
                continue
            }
        }
        newStr.push(str[i])
    }
    return newStr.join('')
}

export function anyMatch(str: string, ...patterns: string[]): boolean {
    const { length } = patterns
    for (let i = 0; i < length; i++) {
        const pattern = patterns[i]
        if (RegExp(pattern).test(str)) return true
    }
    return false
}

export function allMatch(str: string, ...patterns: string[]): boolean {
    const { length } = patterns
    for (let i = 0; i < length; i++) {
        const pattern = patterns[i]
        if (!RegExp(pattern).test(str)) return false
    }
    return true
}

export function anyExt(filename: string, ...exts: string[]): boolean {
    const { length } = exts
    for (let i = 0; i < length; i++) {
        const ext = exts[i]
        if (RegExp(`.*\\.${ext}`).test(filename)) return true
    }
    return false
}

export function getTextWidth(text: string): number {
    const sensor = document.createElement('pre')
    sensor.innerText = text
    sensor.style.position = 'absolute'
    sensor.style.left = '-1000px'
    document.body.appendChild(sensor)
    const width = sensor.clientWidth
    document.body.removeChild(sensor)
    return width
}
