const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
    describe('render', () => {
      it('returns the SVG string for a blue triangle', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
      });
  
      it('returns the SVG string for a hexadecimal red triangle', () => {
        const triangle = new Triangle();
        triangle.setColor('#ff0000');
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="#ff0000" />');
      });
    });
  });
  
  describe('Circle', () => {
    describe('render', () => {
      it('returns the SVG string for a green circle', () => {
        const circle = new Circle();
        circle.setColor('green');
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
      });
  
      it('returns the SVG string for a hexadecimal purple circle', () => {
        const circle = new Circle();
        circle.setColor('#800080');
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="#800080" />');
      });
    });
  });
  
  describe('Square', () => {
    describe('render', () => {
      it('returns the SVG string for a yellow square', () => {
        const square = new Square();
        square.setColor('yellow');
        expect(square.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="yellow" />');
      });
  
      it('returns the SVG string for a hexadecimal black square', () => {
        const square = new Square();
        square.setColor('#000000');
        expect(square.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="#000000" />');
      });
    });
  });

