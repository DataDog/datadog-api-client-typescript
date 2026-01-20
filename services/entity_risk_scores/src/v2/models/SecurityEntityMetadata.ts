import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metadata about the entity from cloud providers
 */
export class SecurityEntityMetadata {
  /**
   * Cloud account ID (AWS)
   */
  "accountId"?: string;
  /**
   * Environment tags associated with the entity
   */
  "environments": Array<string>;
  /**
   * MITRE ATT&CK tactics detected
   */
  "mitreTactics": Array<string>;
  /**
   * MITRE ATT&CK techniques detected
   */
  "mitreTechniques": Array<string>;
  /**
   * Cloud project ID (GCP)
   */
  "projectId"?: string;
  /**
   * Services associated with the entity
   */
  "services": Array<string>;
  /**
   * Data sources that detected this entity
   */
  "sources": Array<string>;
  /**
   * Cloud subscription ID (Azure)
   */
  "subscriptionId"?: string;
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
    accountId: {
      baseName: "accountID",
      type: "string",
    },
    environments: {
      baseName: "environments",
      type: "Array<string>",
      required: true,
    },
    mitreTactics: {
      baseName: "mitreTactics",
      type: "Array<string>",
      required: true,
    },
    mitreTechniques: {
      baseName: "mitreTechniques",
      type: "Array<string>",
      required: true,
    },
    projectId: {
      baseName: "projectID",
      type: "string",
    },
    services: {
      baseName: "services",
      type: "Array<string>",
      required: true,
    },
    sources: {
      baseName: "sources",
      type: "Array<string>",
      required: true,
    },
    subscriptionId: {
      baseName: "subscriptionID",
      type: "string",
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
    return SecurityEntityMetadata.attributeTypeMap;
  }

  public constructor() {}
}
