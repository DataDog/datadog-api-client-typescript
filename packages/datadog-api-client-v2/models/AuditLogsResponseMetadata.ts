/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AuditLogsResponsePage } from "./AuditLogsResponsePage";
import { AuditLogsResponseStatus } from "./AuditLogsResponseStatus";
import { AuditLogsWarning } from "./AuditLogsWarning";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * The metadata associated with a request.
 */
export class AuditLogsResponseMetadata {
  /**
   * Time elapsed in milliseconds.
   */
  "elapsed"?: number;
  /**
   * Paging attributes.
   */
  "page"?: AuditLogsResponsePage;
  /**
   * The identifier of the request.
   */
  "requestId"?: string;
  /**
   * The status of the response.
   */
  "status"?: AuditLogsResponseStatus | UnparsedObject;
  /**
   * A list of warnings (non-fatal errors) encountered. Partial results may return if
   * warnings are present in the response.
   */
  "warnings"?: Array<AuditLogsWarning>;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

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
      type: "AuditLogsResponsePage",
    },
    requestId: {
      baseName: "request_id",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "AuditLogsResponseStatus",
    },
    warnings: {
      baseName: "warnings",
      type: "Array<AuditLogsWarning>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AuditLogsResponseMetadata.attributeTypeMap;
  }

  public constructor() {}
}
