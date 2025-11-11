import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsRestrictionQueriesType } from "./LogsRestrictionQueriesType";
import { RestrictionQueryCreateAttributes } from "./RestrictionQueryCreateAttributes";

/**
 * Data related to the creation of a restriction query.
 */
export class RestrictionQueryCreateData {
  /**
   * Attributes of the created restriction query.
   */
  "attributes"?: RestrictionQueryCreateAttributes;
  /**
   * Restriction query resource type.
   */
  "type"?: LogsRestrictionQueriesType;
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
      type: "RestrictionQueryCreateAttributes",
    },
    type: {
      baseName: "type",
      type: "LogsRestrictionQueriesType",
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
    return RestrictionQueryCreateData.attributeTypeMap;
  }

  public constructor() {}
}
