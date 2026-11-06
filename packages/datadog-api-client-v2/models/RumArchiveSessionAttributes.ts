/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumArchiveSessionRecoveryStatus } from "./RumArchiveSessionRecoveryStatus";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Archived session metadata.
 */
export class RumArchiveSessionAttributes {
  /**
   * Session account id, or null when unavailable.
   */
  "accountId": string | null;
  /**
   * Session anonymous id, or null when unavailable.
   */
  "anonymousId": string | null;
  /**
   * Application UUID.
   */
  "applicationId": string;
  /**
   * Session country, or null when unavailable.
   */
  "country": string | null;
  /**
   * Session recovery state. A missing recovery record can be represented as null. Optional request_id and recovered_at are omitted when unavailable.
   */
  "recoveryStatus": RumArchiveSessionRecoveryStatus | null;
  /**
   * Service name.
   */
  "service": string;
  /**
   * Session identifier.
   */
  "sessionId": string;
  /**
   * Session timestamp in Unix milliseconds.
   */
  "timestamp": Int64;
  /**
   * Session user id, or null when unavailable.
   */
  "userId": string | null;
  /**
   * Session version, or null when unavailable.
   */
  "version": string | null;

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
      baseName: "account_id",
      type: "string",
      required: true,
    },
    anonymousId: {
      baseName: "anonymous_id",
      type: "string",
      required: true,
    },
    applicationId: {
      baseName: "application_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    country: {
      baseName: "country",
      type: "string",
      required: true,
    },
    recoveryStatus: {
      baseName: "recovery_status",
      type: "RumArchiveSessionRecoveryStatus",
      required: true,
    },
    service: {
      baseName: "service",
      type: "string",
      required: true,
    },
    sessionId: {
      baseName: "session_id",
      type: "string",
      required: true,
    },
    timestamp: {
      baseName: "timestamp",
      type: "number",
      required: true,
      format: "int64",
    },
    userId: {
      baseName: "user_id",
      type: "string",
      required: true,
    },
    version: {
      baseName: "version",
      type: "string",
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
    return RumArchiveSessionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
