import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AuditLogsResponsePage } from "./AuditLogsResponsePage";
import { AuditLogsResponseStatus } from "./AuditLogsResponseStatus";
import { AuditLogsWarning } from "./AuditLogsWarning";

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
  "status"?: AuditLogsResponseStatus;
  /**
   * A list of warnings (non-fatal errors) encountered. Partial results may return if
   * warnings are present in the response.
   */
  "warnings"?: Array<AuditLogsWarning>;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
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
