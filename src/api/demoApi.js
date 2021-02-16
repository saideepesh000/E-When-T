import { delay } from "../utils/util";
import { sampleData } from "./sampleData";

export function fetchDemoData() {
	return delay(1000).then(function () {
		return Promise.resolve(sampleData);
	});
}
