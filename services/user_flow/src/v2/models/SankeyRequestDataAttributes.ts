import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SankeyRequestDataAttributesDefinition } from "./SankeyRequestDataAttributesDefinition";
import { SankeyRequestDataAttributesSampling } from "./SankeyRequestDataAttributesSampling";
import { SankeyRequestDataAttributesSearch } from "./SankeyRequestDataAttributesSearch";
import { SankeyRequestDataAttributesTime } from "./SankeyRequestDataAttributesTime";

export class SankeyRequestDataAttributes {
  "dataSource"?: string;
  "definition"?: SankeyRequestDataAttributesDefinition;
  "enforcedExecutionType"?: string;
  "requestId"?: string;
  "sampling"?: SankeyRequestDataAttributesSampling;
  "search"?: SankeyRequestDataAttributesSearch;
  "time"?: SankeyRequestDataAttributesTime;
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
    dataSource: {
      baseName: "data_source",
      type: "string",
    },
    definition: {
      baseName: "definition",
      type: "SankeyRequestDataAttributesDefinition",
    },
    enforcedExecutionType: {
      baseName: "enforced_execution_type",
      type: "string",
    },
    requestId: {
      baseName: "request_id",
      type: "string",
    },
    sampling: {
      baseName: "sampling",
      type: "SankeyRequestDataAttributesSampling",
    },
    search: {
      baseName: "search",
      type: "SankeyRequestDataAttributesSearch",
    },
    time: {
      baseName: "time",
      type: "SankeyRequestDataAttributesTime",
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
    return SankeyRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
