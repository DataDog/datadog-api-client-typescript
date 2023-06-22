import { MonthlyUsageAttributionResponse } from '../../packages/datadog-api-client-v1/models/MonthlyUsageAttributionResponse';
import { ObjectSerializer as ObjectSerializerV1 } from '../../packages/datadog-api-client-v1/models/ObjectSerializer';
import { dateFromRFC3339String, dateToRFC3339String } from "../../packages/datadog-api-client-common/util";

test('TestDeserializationOfInvalidDates', () => {
  const data = `
  {
    "usage":[
       {
          "org_name":"DD Integration Tests (321813)",
          "public_id":"fasjyydbcgwwc2uc",
          "tag_config_source":"DD Integration Tests (321813):::project",
          "tags":null,
          "updated_at":"2023-02-0",
          "month":"2023-02-01T00:00:00+00:00",
          "values":{
             "infra_host_usage":44
          }
       }
    ],
    "metadata":{
       "pagination":{
          "next_record_id":null
       },
       "aggregates":[
          {
             "field":"infra_host_usage",
             "value":45.0,
             "agg_type":"sum"
          }
       ]
    }
  }
  `;


  const result = ObjectSerializerV1.deserialize(
    ObjectSerializerV1.parse(data, "application/json"),
    "MonthlyUsageAttributionResponse",
    "");

    // Invalid dates should be deserialized into an Invalid Date instance
    expect(result).toBeInstanceOf(MonthlyUsageAttributionResponse)
    expect(result.usage[0].updatedAt).toBeInstanceOf(Date);
  }
);

test(`Test3339Dates`, () => {
  const date = new Date("2023-06-13T21:30:48-10:00");
  const result = dateToRFC3339String(date);
  expect(result).toBe("2023-06-14T07:30:48Z");
}
);

test(`Test3339DatesWithTZ`, () => {
  const date = dateFromRFC3339String("2023-06-13T21:30:48-10:00");
  const result = dateToRFC3339String(date);
  expect(result).toBe("2023-06-13T21:30:48-10:00");
}
);
