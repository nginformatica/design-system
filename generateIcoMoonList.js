/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs')
const path = require('path')

const inputFilePath = path.join(
    __dirname,
    'assets/icons/icomoon/selection.json'
)
const outputFilePath = path.join(__dirname, 'assets/icons/icomoon/icomoon.json')

fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler selection.json:', err)
        return
    }

    try {
        const json = JSON.parse(data)

        const iconNames = json.icons.map(icon => icon.properties.name)

        fs.writeFile(
            outputFilePath,
            JSON.stringify(iconNames, null, 2),
            err => {
                if (err) {
                    console.error('Erro ao escrever icomoon.json:', err)
                    return
                }
                console.log(`✅ Arquivo icomoon.json gerado com sucesso!`)
            }
        )
    } catch (error) {
        console.error('Erro ao processar o JSON:', error)
    }
})
