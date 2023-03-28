/**
 * @param {Element} block 
 */
export default async function decorate(block) {
    block.textContent = `
        <div class="super-component">
            SUPER COMPONENT
        </div>
    `;
}