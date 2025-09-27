tailwind.config = {
    theme:{
        extends:{
gridTemplateColumns:{
            'auto' : 'repeat(auto-fit, minmax(200px,1fr))'
        },
        fontFamily:{
            Outfit: ['Outfit', 'sans-serif'],
            Ovo : ['Ovo', 'serif']
        },
animation:{
    spin_slow: 'spin 6s linear infinite'
    },
    colours:{
        lightHover: '#fcf4ff',
        darkHover: '#2a004a'
    }
}
}
}