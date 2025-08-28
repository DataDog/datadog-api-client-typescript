import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgConnectionTypeEnum } from "./OrgConnectionTypeEnum";

/**
 * Attributes for updating an org connection.
 */
export class OrgConnectionUpdateAttributes {
  /**
   * Updated list of connection types.
   */
  "connectionTypes": Array<OrgConnectionTypeEnum>;
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
    connectionTypes: {
      baseName: "connection_types",
      type: "Array<OrgConnectionTypeEnum>",
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
    return OrgConnectionUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
