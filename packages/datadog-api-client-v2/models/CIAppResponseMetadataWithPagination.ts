/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppResponsePage } from "./CIAppResponsePage";
import { CIAppResponseStatus } from "./CIAppResponseStatus";
import { CIAppWarning } from "./CIAppWarning";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    elapsed: {
      type: "number",
      format: "int64",
    },
    page: {
      type: "CIAppResponsePage",
    },
    requestId: {
      baseName: "request_id",
      type: "string",
    },
    status: {
      type: "CIAppResponseStatus",
    },
    warnings: {
      type: "Array<CIAppWarning>",
    },
  };
}
