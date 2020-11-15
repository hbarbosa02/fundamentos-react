function If({children, ...props}) {
    const elseChild = children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    const ifChildren = children.filter(child => {
        return child !== elseChild
    })

    if(props.test) {
        return ifChildren
    } else {
        return elseChild
    }
}

export default If
export const Else = props => props.children