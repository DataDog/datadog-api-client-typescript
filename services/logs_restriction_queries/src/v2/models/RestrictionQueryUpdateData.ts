import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsRestrictionQueriesType } from "./LogsRestrictionQueriesType";
import { RestrictionQueryUpdateAttributes } from "./RestrictionQueryUpdateAttributes";

/**
 * Data related to the update of a restriction query.
 */
export class RestrictionQueryUpdateData {
  /**
   * Attributes of the edited restriction query.
   */
  "attributes"?: RestrictionQueryUpdateAttributes;
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
      type: "RestrictionQueryUpdateAttributes",
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
    return RestrictionQueryUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
