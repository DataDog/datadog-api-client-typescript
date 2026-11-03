/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityFindingsPage } from "./SecurityFindingsPage";
import { SecurityFindingsStatus } from "./SecurityFindingsStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata about the response.
 */
export class SecurityFindingsMeta {
  /**
   * The time elapsed in milliseconds.
   */
  "elapsed"?: number;
  /**
   * Pagination information.
   */
  "page"?: SecurityFindingsPage;
  /**
   * The identifier of the request.
   */
  "requestId"?: string;
  /**
   * The status of the response.
   */
  "status"?: SecurityFindingsStatus;

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
    elapsed: {
      baseName: "elapsed",
      type: "number",
      format: "int64",
    },
    page: {
      baseName: "page",
      type: "SecurityFindingsPage",
    },
    requestId: {
      baseName: "request_id",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "SecurityFindingsStatus",
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
    return SecurityFindingsMeta.attributeTypeMap;
  }

  public constructor() {}
}
