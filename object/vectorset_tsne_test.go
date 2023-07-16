// Copyright 2023 The casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package object

import (
	"fmt"
	"testing"
)

func TestDoVectorsetTsne(t *testing.T) {
	InitConfig()

	dimension := 50

	//vectorset := getVectorset("admin", "wikipedia")
	vectorset, _ := getVectorset("admin", "wordVector_utf-8")
	vectorset.LoadVectors("../../tmpFiles/")
	vectorset.DoTsne(dimension)

	vectorset.Name = fmt.Sprintf("%s_Dim_%d", vectorset.Name, dimension)
	vectorset.FileName = fmt.Sprintf("%s_Dim_%d.csv", vectorset.FileName, dimension)
	vectorset.FileSize = ""
	vectorset.Dimension = dimension
	vectorset.WriteVectors("../../tmpFiles/")
	AddVectorset(vectorset)
}
