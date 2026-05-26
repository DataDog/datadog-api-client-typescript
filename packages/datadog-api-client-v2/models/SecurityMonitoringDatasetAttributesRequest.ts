/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringDatasetDefinition } from "./SecurityMonitoringDatasetDefinition";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of a dataset create or update request.
 */
export class SecurityMonitoringDatasetAttributesRequest {
  /**
   * The definition of the dataset. The shape depends on the value of `data_source`.
   * Use `reference_table` or `managed_resource` for a referential dataset, or one of the
   * event platform sources (for example `logs`, `audit`, `events`, `spans`, `rum`) for
   * an event platform dataset.
   */
  "definition": SecurityMonitoringDatasetDefinition;
  /**
   * The description of the dataset. Maximum 255 characters.
   */
  "description"?: string;
  /**
   * The expected current version of the dataset for optimistic concurrency control on updates.
   * If the dataset's current version does not match, the request is rejected with a 409 Conflict.
   */
  "version"?: number;

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
    definition: {
      baseName: "definition",
      type: "SecurityMonitoringDatasetDefinition",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
    },
    version: {
      baseName: "version",
      type: "number",
      format: "int64",
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
    return SecurityMonitoringDatasetAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
