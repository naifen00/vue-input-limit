export default {
    bind(el, binding) {
        const type = Object.prototype.toString.call(binding.value);
        const input = el.nodeName.toUpperCase() === 'INPUT' ? el : el.querySelector('input');
        let composing = false;
        let filter;

        if (type === '[object RegExp]') {
            filter = (value = '') => value.replace(new RegExp(binding.value, 'g'), '');
        } else if (type === '[object Function]') {
            filter = binding.value;
        } else {
            throw new Error(`[Vue-input-limit:] ${binding.expression} is not a function or regexp`);
        }

        input.addEventListener('compositionstart', () => {
            composing = true;
        }, false);

        input.addEventListener('compositionend', (e) => {
            const wish = filter(e.target.value);

            composing = false;
            e.target.value = wish;

            setTimeout(() => {
                e.target.value = wish;
                e.target.dispatchEvent(new InputEvent('input'));
            });
        }, false);

        input.addEventListener('input', (e) => {
            const wish = filter(e.target.value);

            if (!composing && e.target.value !== wish) {
                e.target.value = wish;

                setTimeout(() => {
                    e.target.value = wish;
                    e.target.dispatchEvent(new InputEvent('input'));
                });
            }
        }, false);
    },
};