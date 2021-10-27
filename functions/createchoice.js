function createChoice(choice) {
    const label = document.createElement('label');
    label.classList.add('choice');

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'choices';
    radio.value = choice.id;
    radio.required = true;
    label.appendChild(radio);

    const desc = document.createElement('span');
    desc.textContent = choice.description;
    label.appendChild(desc);

    return label;
}
export default createChoice;