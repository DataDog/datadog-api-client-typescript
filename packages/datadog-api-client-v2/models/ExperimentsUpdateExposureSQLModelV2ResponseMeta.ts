/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Removed model entries. Present only when the update removes an entry.
 */
export class ExperimentsUpdateExposureSQLModelV2ResponseMeta {
  /**
   * Property names removed from the model.
   */
  "removedPropertyNames"?: Array<string>;
  /**
   * Subject type IDs removed from the model.
   */
  "removedSubjectTypeIds"?: Array<string>;

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
    removedPropertyNames: {
      baseName: "removed_property_names",
      type: "Array<string>",
    },
    removedSubjectTypeIds: {
      baseName: "removed_subject_type_ids",
      type: "Array<string>",
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
    return ExperimentsUpdateExposureSQLModelV2ResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
