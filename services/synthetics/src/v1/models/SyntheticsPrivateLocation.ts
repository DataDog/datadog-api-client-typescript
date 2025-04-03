import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsPrivateLocationMetadata } from "./SyntheticsPrivateLocationMetadata";
import { SyntheticsPrivateLocationSecrets } from "./SyntheticsPrivateLocationSecrets";

/**
 * Object containing information about the private location to create.
 */
export class SyntheticsPrivateLocation {
  /**
   * Description of the private location.
   */
  "description": string;
  /**
   * Unique identifier of the private location.
   */
  "id"?: string;
  /**
   * Object containing metadata about the private location.
   */
  "metadata"?: SyntheticsPrivateLocationMetadata;
  /**
   * Name of the private location.
   */
  "name": string;
  /**
   * Secrets for the private location. Only present in the response when creating the private location.
   */
  "secrets"?: SyntheticsPrivateLocationSecrets;
  /**
   * Array of tags attached to the private location.
   */
  "tags": Array<string>;
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
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    metadata: {
      baseName: "metadata",
      type: "SyntheticsPrivateLocationMetadata",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    secrets: {
      baseName: "secrets",
      type: "SyntheticsPrivateLocationSecrets",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsPrivateLocation.attributeTypeMap;
  }

  public constructor() {}
}
