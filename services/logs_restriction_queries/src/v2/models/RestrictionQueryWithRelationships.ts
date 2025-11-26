import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsRestrictionQueriesType } from "./LogsRestrictionQueriesType";
import { RestrictionQueryAttributes } from "./RestrictionQueryAttributes";
import { UserRelationships } from "./UserRelationships";

/**
 * Restriction query object returned by the API.
 */
export class RestrictionQueryWithRelationships {
  /**
   * Attributes of the restriction query.
   */
  "attributes"?: RestrictionQueryAttributes;
  /**
   * ID of the restriction query.
   */
  "id"?: string;
  /**
   * Relationships of the user object.
   */
  "relationships"?: UserRelationships;
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
      type: "RestrictionQueryAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "UserRelationships",
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
    return RestrictionQueryWithRelationships.attributeTypeMap;
  }

  public constructor() {}
}
