import { OkPacket } from "mysql";
import dal from "../02 - utils/dal";
import StoreModel from "../04 - models/StoreModel";

async function getData(): Promise<StoreModel[]> {
  const sql = "SELECT * FROM stores;";
  const data = await dal.execute(sql);
  return data;
}

async function getSingleData(id: number): Promise<StoreModel> {
  const sql = `
  SELECT * FROM stores 
  WHERE id ===  ${id};
  `;
  const data = await dal.execute(sql);
  return data;
}

async function addSingleData(store: StoreModel): Promise<StoreModel> {
  const sql = `
  INSERT INTO stores 
  VALUES(DEFAULT, '${store.name}', '${store.description}', '${store.address}')
  `;
  const info: OkPacket = await dal.execute(sql);
  store.id = info.insertId;
  return store;
}

export default {
  getData,
  getSingleData,
  addSingleData,
};
