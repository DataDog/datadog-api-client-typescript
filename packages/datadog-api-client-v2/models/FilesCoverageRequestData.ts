/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FilesCoverageRequestAttributes } from "./FilesCoverageRequestAttributes";
import { FilesCoverageRequestType } from "./FilesCoverageRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for files coverage request.
 */
export class FilesCoverageRequestData {
  /**
   * Attributes for requesting per-file code coverage data. Exactly one of `commit_sha`, `branch`, or `pr_number` must be provided. At most one of `service`, `codeowner`, or `flag` may be provided.
   */
  "attributes": FilesCoverageRequestAttributes;
  /**
   * JSON:API type for files coverage request. The value must always be `ci_app_coverage_files_request`.
   */
  "type": FilesCoverageRequestType;

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
    attributes: {
      baseName: "attributes",
      type: "FilesCoverageRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FilesCoverageRequestType",
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
    return FilesCoverageRequestData.attributeTypeMap;
  }

  public constructor() {}
}
