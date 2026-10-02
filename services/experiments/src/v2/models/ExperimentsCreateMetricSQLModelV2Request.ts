import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsCreateMetricSQLModelV2RequestData } from "./ExperimentsCreateMetricSQLModelV2RequestData";

/**
 * Request to create a SQL model that supplies metric data.
 */
export class ExperimentsCreateMetricSQLModelV2Request {
  /**
   * Metric SQL model resource to create.
   */
  "data": ExperimentsCreateMetricSQLModelV2RequestData;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "ExperimentsCreateMetricSQLModelV2RequestData",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ExperimentsCreateMetricSQLModelV2Request.attributeTypeMap;
  }

  public constructor() {}
}
