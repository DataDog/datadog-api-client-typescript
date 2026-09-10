/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FilesCoverageAttributes } from "./FilesCoverageAttributes";
import { FilesCoverageResponseType } from "./FilesCoverageResponseType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for files coverage response.
 */
export class FilesCoverageData {
  /**
   * Attributes of the per-file code coverage response.
   */
  "attributes"?: FilesCoverageAttributes;
  /**
   * Unique identifier for the files coverage response.
   */
  "id"?: string;
  /**
   * JSON:API type for files coverage response. The value must always be `ci_app_coverage_files`.
   */
  "type"?: FilesCoverageResponseType;

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
      type: "FilesCoverageAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "FilesCoverageResponseType",
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
    return FilesCoverageData.attributeTypeMap;
  }

  public constructor() {}
}
