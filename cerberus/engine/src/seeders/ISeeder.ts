export default interface ISeeder {
  execute: () => Promise<void>;
}  