const parse = (input, el) => {
  function parseComponent(inputComponent) {
    const $canvas = inputComponent.canvas.$canvas;

    // Render all the children and props
    // $canvas.register(el);
    $canvas.start();

    return inputComponent;
  }

  return parseComponent(input);
};

export default parse;
