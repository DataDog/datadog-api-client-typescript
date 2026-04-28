import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MuteFindingsReason } from "./MuteFindingsReason";

/**
 * Mute properties to apply to the findings.
 */
export class MuteFindingsMuteAttributes {
  /**
   * Additional information about the reason why the findings are muted or unmuted. This field has a limit of 280 characters.
   */
  "description"?: string;
  /**
   * The expiration date of the mute action (Unix ms). It must be set to a value greater than the current timestamp. If this field is not provided, the findings remain muted indefinitely.
   */
  "expireAt"?: number;
  /**
   * Whether the findings should be muted or unmuted.
   */
  "isMuted": boolean;
  /**
   * The reason why the findings are muted or unmuted.
   */
  "reason": MuteFindingsReason;
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
    },
    expireAt: {
      baseName: "expire_at",
      type: "number",
      format: "int64",
    },
    isMuted: {
      baseName: "is_muted",
      type: "boolean",
      required: true,
    },
    reason: {
      baseName: "reason",
      type: "MuteFindingsReason",
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
    return MuteFindingsMuteAttributes.attributeTypeMap;
  }

  public constructor() {}
}
