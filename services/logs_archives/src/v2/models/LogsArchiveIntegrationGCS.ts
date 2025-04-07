import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The GCS archive's integration destination.
 */
export class LogsArchiveIntegrationGCS {
  /**
   * A client email.
   */
  "clientEmail": string;
  /**
   * A project ID.
   */
  "projectId"?: string;
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
    clientEmail: {
      baseName: "client_email",
      type: "string",
      required: true,
    },
    projectId: {
      baseName: "project_id",
      type: "string",
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
    return LogsArchiveIntegrationGCS.attributeTypeMap;
  }

  public constructor() {}
}
