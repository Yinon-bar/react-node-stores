class StoreModel {
  public id: number;
  public name: string;
  public description: string;
  public address: string;

  public constructor(store: StoreModel) {
    this.id = store.id;
    this.name = store.name;
    this.description = store.description;
    this.address = store.address;
  }
}

export default StoreModel;
