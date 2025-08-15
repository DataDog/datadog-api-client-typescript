/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateAppsDatastoreFromImportRequestData } from "./CreateAppsDatastoreFromImportRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `CreateAppsDatastoreFromImportRequest` object.
 */
export class CreateAppsDatastoreFromImportRequest {
  /**
   * The definition of `CreateAppsDatastoreFromImportRequestData` object.
   */
  "data"?: CreateAppsDatastoreFromImportRequestData;

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
    data: {
      baseName: "data",
      type: "CreateAppsDatastoreFromImportRequestData",
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
    return CreateAppsDatastoreFromImportRequest.attributeTypeMap;
  }

  public constructor() {}
}
