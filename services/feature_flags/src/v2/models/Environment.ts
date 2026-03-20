import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateEnvironmentDataType } from "./CreateEnvironmentDataType";
import { EnvironmentAttributes } from "./EnvironmentAttributes";

/**
 * A feature flag environment resource.
 */
export class Environment {
  /**
   * Attributes of an environment.
   */
  "attributes": EnvironmentAttributes;
  /**
   * The unique identifier of the environment.
   */
  "id": string;
  /**
   * The resource type.
   */
  "type": CreateEnvironmentDataType;
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
      type: "EnvironmentAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "CreateEnvironmentDataType",
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
    return Environment.attributeTypeMap;
  }

  public constructor() {}
}
