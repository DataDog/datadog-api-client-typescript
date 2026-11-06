import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Approximate recoverable count.
 */
export class RumRecoveryCountResponseAttributes {
  /**
   * Estimated distinct recoverable sessions not already retained in hot storage. The full estimate is returned without capping it at max_recoverable_sessions.
   */
  "estimatedCount": number;
  /**
   * Configured maximum estimated recoverable sessions per batch (100,000 by default). Estimates equal to this value are accepted at creation.
   */
  "maxRecoverableSessions": number;
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
    estimatedCount: {
      baseName: "estimated_count",
      type: "number",
      required: true,
      format: "int64",
    },
    maxRecoverableSessions: {
      baseName: "max_recoverable_sessions",
      type: "number",
      required: true,
      format: "int64",
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
    return RumRecoveryCountResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
