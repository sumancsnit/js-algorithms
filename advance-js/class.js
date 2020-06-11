class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    console.log('Player', this);
  }

  intruduce() {
    console.log(`Hi, I am ${this.name}`);
  }
  static test() {
    console.log(`Hi`);
  }
}

class Wizard extends Player {
  constructor(name, type, no) {
    super(name, type);
    console.log('Wizard', this);
    this.handleInputChange = () => {
      console.log('selectionMade: ');
    };
  }

  play() {
    console.log(`Hi, I'm a ${this.type}`);
  }
}

Player.test();

const wizard = new Wizard('suman', 'developer', 7);
wizard.intruduce();
wizard.handleInputChange();
