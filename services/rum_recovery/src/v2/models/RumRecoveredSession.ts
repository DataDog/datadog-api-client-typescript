import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRecoverySessionStatus } from "./RumRecoverySessionStatus";

/**
 * Progress for one targeted session.
 */
export class RumRecoveredSession {
  /**
   * Application UUID.
   */
  "applicationId": string;
  /**
   * Failure details, if present.
   */
  "errorMessage"?: string;
  /**
   * Recovered event count.
   */
  "eventsRecovered": number;
  /**
   * Session identifier.
   */
  "sessionId": string;
  /**
   * Session availability or recovery state. `RECOVERED` indicates that the session is ready to query.
   */
  "status": RumRecoverySessionStatus;
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
    applicationId: {
      baseName: "application_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    errorMessage: {
      baseName: "error_message",
      type: "string",
    },
    eventsRecovered: {
      baseName: "events_recovered",
      type: "number",
      required: true,
      format: "int64",
    },
    sessionId: {
      baseName: "session_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    status: {
      baseName: "status",
      type: "RumRecoverySessionStatus",
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
    return RumRecoveredSession.attributeTypeMap;
  }

  public constructor() {}
}
