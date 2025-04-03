import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CIAppResponsePage } from "./CIAppResponsePage";
import { CIAppResponseStatus } from "./CIAppResponseStatus";
import { CIAppWarning } from "./CIAppWarning";

/**
 * The metadata associated with a request.
 */
export class CIAppResponseMetadataWithPagination {
  /**
   * The time elapsed in milliseconds.
   */
  "elapsed"?: number;
  /**
   * Paging attributes.
   */
  "page"?: CIAppResponsePage;
  /**
   * The identifier of the request.
   */
  "requestId"?: string;
  /**
   * The status of the response.
   */
  "status"?: CIAppResponseStatus;
  /**
   * A list of warnings (non-fatal errors) encountered. Partial results may return if
   * warnings are present in the response.
   */
  "warnings"?: Array<CIAppWarning>;
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
      type: "CIAppResponsePage",
    },
    requestId: {
      baseName: "request_id",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "CIAppResponseStatus",
    },
    warnings: {
      baseName: "warnings",
      type: "Array<CIAppWarning>",
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
    return CIAppResponseMetadataWithPagination.attributeTypeMap;
  }

  public constructor() {}
}
