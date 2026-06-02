/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FindingServiceNowTicketResult } from "./FindingServiceNowTicketResult";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * ServiceNow ticket associated with the case.
 */
export class FindingServiceNowTicket {
  /**
   * Result of the ServiceNow ticket creation or attachment.
   */
  "result"?: FindingServiceNowTicketResult;
  /**
   * Status of the ServiceNow ticket operation. Can be "COMPLETED" if successful, or "FAILED" if the operation failed.
   */
  "status"?: string;

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
    result: {
      baseName: "result",
      type: "FindingServiceNowTicketResult",
    },
    status: {
      baseName: "status",
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
    return FindingServiceNowTicket.attributeTypeMap;
  }

  public constructor() {}
}
