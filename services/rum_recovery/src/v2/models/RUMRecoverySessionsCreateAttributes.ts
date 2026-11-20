import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMRecoverySessionInput } from "./RUMRecoverySessionInput";
import { RUMRecoverySessionsRequestType } from "./RUMRecoverySessionsRequestType";

/**
 * Recover 1 to 100 explicit archived sessions. Session IDs must be unique within the request.
 */
export class RUMRecoverySessionsCreateAttributes {
  /**
   * Targeted recovery. Omitted request_type defaults to sessions.
   */
  "requestType"?: RUMRecoverySessionsRequestType;
  /**
   * Sessions to recover.
   */
  "sessions": Array<RUMRecoverySessionInput>;
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
      type: "RUMRecoverySessionsRequestType",
    },
    sessions: {
      baseName: "sessions",
      type: "Array<RUMRecoverySessionInput>",
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
    return RUMRecoverySessionsCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
