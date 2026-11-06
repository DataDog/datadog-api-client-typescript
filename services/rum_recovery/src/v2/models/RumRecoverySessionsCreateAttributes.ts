import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRecoverySessionInput } from "./RumRecoverySessionInput";
import { RumRecoverySessionsRequestType } from "./RumRecoverySessionsRequestType";

/**
 * Recover 1 to 100 explicit archived sessions. Session IDs must be unique within the request.
 */
export class RumRecoverySessionsCreateAttributes {
  /**
   * Targeted recovery. Omitted request_type defaults to sessions.
   */
  "requestType"?: RumRecoverySessionsRequestType;
  /**
   * Sessions to recover.
   */
  "sessions": Array<RumRecoverySessionInput>;
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
    requestType: {
      baseName: "request_type",
      type: "RumRecoverySessionsRequestType",
    },
    sessions: {
      baseName: "sessions",
      type: "Array<RumRecoverySessionInput>",
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
    return RumRecoverySessionsCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
