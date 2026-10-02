import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsUpdateExposureSQLModelV2RequestDataAttributes } from "./ExperimentsUpdateExposureSQLModelV2RequestDataAttributes";
import { ExperimentsUpdateExposureSQLModelV2RequestDataType } from "./ExperimentsUpdateExposureSQLModelV2RequestDataType";

/**
 * Exposure SQL model resource to create.
 */
export class ExperimentsCreateExposureSQLModelV2RequestData {
  /**
   * Complete column mappings and query used to replace the exposure SQL model.
   */
  "attributes": ExperimentsUpdateExposureSQLModelV2RequestDataAttributes;
  /**
   * Optional JSON:API resource identifier field.
   */
  "id"?: string;
  /**
   * Exposure SQL models resource type.
   */
  "type": ExperimentsUpdateExposureSQLModelV2RequestDataType;
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
    attributes: {
      baseName: "attributes",
      type: "ExperimentsUpdateExposureSQLModelV2RequestDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ExperimentsUpdateExposureSQLModelV2RequestDataType",
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
    return ExperimentsCreateExposureSQLModelV2RequestData.attributeTypeMap;
  }

  public constructor() {}
}
