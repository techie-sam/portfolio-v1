const containerVariant = {
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition:{
            staggerChildren: 0.1,
            when:"beforeChildren",
        },
    }
}
const childVariant = {
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        y:-10,
    }
}
export {containerVariant, childVariant}