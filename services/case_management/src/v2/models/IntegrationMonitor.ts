import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Monitor integration settings
 */
export class IntegrationMonitor {
  /**
   * Whether auto-resolve is enabled
   */
  "autoResolveEnabled"?: boolean;
  /**
   * Case type ID for monitor integration
   */
  "caseTypeId"?: string;
  /**
   * Whether monitor integration is enabled
   */
  "enabled"?: boolean;
  /**
   * Monitor handle
   */
  "handle"?: string;
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
    autoResolveEnabled: {
      baseName: "auto_resolve_enabled",
      type: "boolean",
    },
    caseTypeId: {
      baseName: "case_type_id",
      type: "string",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    handle: {
      baseName: "handle",
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
    return IntegrationMonitor.attributeTypeMap;
  }

  public constructor() {}
}
