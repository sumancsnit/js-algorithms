const anagram = (string1, string2) =>
  string1.split('').sort().join('') === string2.split('').sort().join('');

anagram('suman', 'nsuma');
