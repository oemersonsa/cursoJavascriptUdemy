exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelQualquer = 'Este é o valor da variavel local.'
    next();
}