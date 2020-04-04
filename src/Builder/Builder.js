export default class Builder {
    static generate(form) {
        let code = '';
        form.forEach(section => {
            code += ''
                + '<div class="border-t border-gray-400 mb-4 py-8 mt-4 md:flex">\n'
                + '    <div class="md:w-1/4">\n'
                + `        <p class="text-lg text-gray-700 w-full focus:outline-none">${section.title}</p>\n`
                + '    </div>\n'
                + '    <div class="flex flex-wrap items-center mt-4 md:w-3/4">\n';

            section.fields.forEach(field => {
                code += '        <div class="w-full md:px-3 md:w-1/2">\n'
                    + `            <label class="block tracking-wide text-gray-700 mb-2">${field.label}</label>\n`;
                if (field.type === 'input') {
                    code += '            <input class="block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3" type="text">\n';
                } else if (field.type === 'select') {
                    code += '            <select class="block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3">\n'
                        + '                <option>Lorem ipsum</option>\n'
                        + '            </select>\n';
                } else if (field.type === 'textarea') {
                    code += '            <textarea class="block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight" type="text"></textarea>\n';
                }

                code += '        </div>\n';

            });
            code += '    </div>\n</div>\n';
        });

        return code;
    }
}