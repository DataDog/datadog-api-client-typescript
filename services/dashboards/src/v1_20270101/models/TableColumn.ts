import { UnparsedObject } from "@datadog/datadog-api-client";

import { ComputeTableColumn } from "./ComputeTableColumn";
import { FormulaTableColumn } from "./FormulaTableColumn";
import { PresetPeriodTableColumn } from "./PresetPeriodTableColumn";
import { ReferenceTableColumn } from "./ReferenceTableColumn";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type TableColumn =
  | ComputeTableColumn
  | PresetPeriodTableColumn
  | FormulaTableColumn
  | ReferenceTableColumn
  | UnparsedObject;
